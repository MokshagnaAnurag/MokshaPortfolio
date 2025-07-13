import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  NodeTypes,
  Node,
  Edge,
  ReactFlowProvider,
  useReactFlow,
  BackgroundVariant,
  Panel,
  ConnectionLineType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { 
  generateInitialNodePositions, 
  generateEdges, 
  Skill, 
  categoryLabels, 
  categoryColors, 
  SkillCategory 
} from '../utils/skillsData';
import SkillNode from './SkillNode';
import SkillDetailPanel from './SkillDetailPanel';
import SkillCategoriesLegend from './SkillCategoriesLegend';
import { useToast } from '@/hooks/use-toast';

// Define node types
const nodeTypes: NodeTypes = {
  skillNode: SkillNode,
};

const SkillGraphContent: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(generateInitialNodePositions());
  const [edges, setEdges, onEdgesChange] = useEdgesState(generateEdges());
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [highlightedEdges, setHighlightedEdges] = useState<string[]>([]);
  const [isZooming, setIsZooming] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const { toast } = useToast();
  
  const reactFlowInstance = useReactFlow();
  
  // Handle node click with enhanced transitions
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    // Toggle selection
    const isAlreadySelected = selectedSkill && selectedSkill.id === node.data.id;
    
    if (isAlreadySelected) {
      setSelectedSkill(null);
      setHighlightedEdges([]);
      
      // Reset view with animation
      reactFlowInstance.setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 800 });
      
      toast({
        title: "Selection cleared",
        description: "You can now explore other skills",
      });
    } else {
      // Convert node.data to Skill type safely
      const skillData = node.data as unknown as Skill;
      setSelectedSkill(skillData);
      
      // Find connected edges
      const connectedEdges = edges.filter(
        edge => edge.source === node.id || edge.target === node.id
      ).map(edge => edge.id);
      
      setHighlightedEdges(connectedEdges);
      
      // Zoom to node with enhanced animation
      setIsZooming(true);
      reactFlowInstance.setCenter(node.position.x, node.position.y, { 
        duration: 1000, 
        zoom: 1.8 
      });
      setTimeout(() => setIsZooming(false), 1000);
      
      toast({
        title: `${skillData.name} selected`,
        description: `Proficiency level: ${skillData.proficiency}/5`,
      });
    }
  }, [selectedSkill, edges, reactFlowInstance, toast]);
  
  // Filter nodes by category
  const filterNodesByCategory = useCallback((category: string | null) => {
    setCategoryFilter(category);
    
    if (category) {
      // Apply radial emphasis animation
      setNodes((nds) => 
        nds.map(node => {
          const isInCategory = node.data.category === category;
          return {
            ...node,
            style: {
              ...node.style,
              opacity: isInCategory ? 1 : 0.3,
              transform: isInCategory ? 'scale(1.1)' : 'scale(0.9)',
              transition: 'opacity 500ms, transform 500ms',
            }
          };
        })
      );
      
      // Filter edges
      setEdges((eds) =>
        eds.map(edge => {
          const sourceNode = nodes.find(n => n.id === edge.source);
          const targetNode = nodes.find(n => n.id === edge.target);
          const isRelated = sourceNode?.data.category === category || targetNode?.data.category === category;
          
          return {
            ...edge,
            style: {
              ...edge.style,
              opacity: isRelated ? 0.8 : 0.1,
              strokeWidth: isRelated ? 2 : 1,
              transition: 'opacity 500ms, stroke-width 500ms',
            }
          };
        })
      );
    } else {
      // Reset all nodes and edges
      setNodes((nds) => 
        nds.map(node => ({
          ...node,
          style: {
            ...node.style,
            opacity: 1,
            transform: 'scale(1)',
            transition: 'opacity 500ms, transform 500ms',
          }
        }))
      );
      
      setEdges((eds) =>
        eds.map(edge => ({
          ...edge,
          style: {
            ...edge.style,
            opacity: 0.3,
            strokeWidth: 2,
            transition: 'opacity 500ms, stroke-width 500ms',
          }
        }))
      );
    }
  }, [setNodes, setEdges, nodes]);
  
  // Update edge styles when highlighting changes
  useEffect(() => {
    setEdges(edges => 
      edges.map(edge => ({
        ...edge,
        animated: highlightedEdges.includes(edge.id),
        className: highlightedEdges.includes(edge.id) ? 'skill-connection skill-connection-active' : 'skill-connection',
        style: {
          ...edge.style,
          strokeWidth: highlightedEdges.includes(edge.id) ? 3 : 2,
          stroke: highlightedEdges.includes(edge.id) ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
          transition: 'stroke 300ms, stroke-width 300ms',
        }
      }))
    );
  }, [highlightedEdges, setEdges]);
  
  // Reset selection when clicking on the canvas
  const onPaneClick = useCallback(() => {
    if (selectedSkill) {
      setSelectedSkill(null);
      setHighlightedEdges([]);
      // Reset zoom and center the view with animation
      reactFlowInstance.setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 1000 });
    }
    
    // Clear category filter
    if (categoryFilter) {
      filterNodesByCategory(null);
    }
  }, [selectedSkill, reactFlowInstance, categoryFilter, filterNodesByCategory]);
  
  // Custom handle for when nodes are moved
  const onNodeDragStop = useCallback(() => {
    toast({
      title: "Node position updated",
      description: "The layout has been manually adjusted",
    });
  }, [toast]);

  // Memoized node color function for MiniMap
  const nodeColor = useMemo(() => {
    return (node: Node) => {
      if (selectedSkill && node.id === selectedSkill.id) {
        return '#ffffff';
      }
      
      // Safely access the category property with type checking
      const nodeData = node.data as { category?: SkillCategory };
      return nodeData.category ? categoryColors[nodeData.category] : '#6366f1';
    };
  }, [selectedSkill]);
  
  return (
    <div className="w-full h-screen relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.2}
        maxZoom={3}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        className={isZooming ? 'transitioning' : ''}
        connectionLineType={ConnectionLineType.SmoothStep}
        connectionLineStyle={{ stroke: 'rgba(255, 255, 255, 0.5)', strokeWidth: 2 }}
      >
        <Background 
          color="#ffffff" 
          gap={24} 
          size={1} 
          variant={BackgroundVariant.Dots} 
        />
        <Controls 
          className="!bottom-4 !top-auto !left-4 !bg-black/50 !backdrop-blur-md !border-white/10 !shadow-lg !p-2 !rounded-lg transition-opacity opacity-70 hover:opacity-100" 
        />
        <MiniMap 
          nodeStrokeColor={(node) => '#fff'}
          nodeColor={nodeColor}
          maskColor="rgba(0, 0, 0, 0.6)"
          className="!bottom-4 !top-auto !right-4 !bg-black/50 !backdrop-blur-md !border-white/10 !shadow-lg !rounded-lg transition-opacity opacity-70 hover:opacity-100"
        />
        
        {/* Category filter panel */}
        <Panel position="top-left" className="bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10 animate-fade-in">
          <div className="text-white/80 text-sm font-semibold mb-2">Filter by Category</div>
          <div className="flex flex-wrap gap-2 max-w-[300px]">
            {Object.entries(categoryLabels).map(([cat, label]) => (
              <button
                key={cat}
                onClick={() => filterNodesByCategory(categoryFilter === cat ? null : cat)}
                className={`text-xs px-3 py-1 rounded-full transition-all ${
                  categoryFilter === cat 
                  ? 'bg-white text-black font-medium shadow-md scale-110' 
                  : 'bg-white/20 text-white/90 hover:bg-white/30'
                }`}
              >
                {label}
              </button>
            ))}
            {categoryFilter && (
              <button
                onClick={() => filterNodesByCategory(null)}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/90 hover:bg-white/20"
              >
                Clear Filter
              </button>
            )}
          </div>
        </Panel>
      </ReactFlow>
      
      <SkillDetailPanel skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      <SkillCategoriesLegend />
      
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-4 rounded-lg z-10 animate-fade-in border border-white/10 shadow-xl">
        <h1 className="text-2xl font-bold text-white text-center">Skill Sphere Explorer</h1>
        <p className="text-white/70 text-sm text-center mt-1">
          Click on skills to explore connections and details | Drag nodes to customize layout
        </p>
      </div>
    </div>
  );
};

// Wrapper component with ReactFlowProvider
const SkillGraph: React.FC = () => {
  return (
    <ReactFlowProvider>
      <SkillGraphContent />
    </ReactFlowProvider>
  );
};

export default SkillGraph;
