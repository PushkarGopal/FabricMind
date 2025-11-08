'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type FabricVisualizerProps = {
  fabricImageUrl: string;
};

export function FabricVisualizer({ fabricImageUrl }: FabricVisualizerProps) {
  const roomScenes = PlaceHolderImages;
  const [activeScene, setActiveScene] = useState(roomScenes[0]);

  // This is a simple representation. A more advanced version might use different overlays per scene.
  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '48%',
    left: '35%',
    width: '30%',
    height: '25%',
    backgroundImage: `url(${fabricImageUrl})`,
    backgroundSize: 'cover',
    borderRadius: '4px',
    mixBlendMode: 'multiply',
    opacity: 0.85,
    transform: 'perspective(500px) rotateY(-10deg) rotateX(5deg)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  };

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden">
          <Image
            key={activeScene.id}
            src={activeScene.imageUrl}
            alt={activeScene.description}
            fill
            className="object-cover"
            data-ai-hint={activeScene.imageHint}
          />
          <div style={overlayStyle}></div>
        </div>
        <div className="flex gap-2 justify-center">
          {roomScenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene)}
              className={cn(
                'w-16 h-12 rounded-md overflow-hidden ring-offset-background transition-all',
                activeScene.id === scene.id ? 'ring-2 ring-primary' : 'hover:ring-2 ring-muted'
              )}
            >
              <Image
                src={scene.imageUrl}
                alt={scene.description}
                width={64}
                height={48}
                className="object-cover w-full h-full"
                data-ai-hint={scene.imageHint}
              />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
