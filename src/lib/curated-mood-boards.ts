import type { FabricSuggestion } from './types';

export type CuratedMoodBoard = {
    id: string;
    title: string;
    description: string;
    author: string;
    fabrics: Omit<FabricSuggestion, 'properties'>[];
};

export const curatedMoodBoards: CuratedMoodBoard[] = [
    {
        id: 'coastal-grandmother',
        title: 'Coastal Grandmother',
        description: 'Light, airy, and sophisticated. Think beach house chic.',
        author: 'Nancy Meyers',
        fabrics: [
            {
                fabricName: 'Belgian Linen',
                description: 'A classic, breathable linen perfect for slipcovers and curtains.',
                imageUrl: 'https://images.unsplash.com/photo-1622039649232-34670f209641?q=80&w=800'
            },
            {
                fabricName: 'Chunky Knit Wool',
                description: 'For cozy throws and oversized sweaters.',
                imageUrl: 'https://images.unsplash.com/photo-1619476985392-aa5491a67396?q=80&w=800'
            },
            {
                fabricName: 'Cream Bouclé',
                description: 'Adds texture and warmth to any piece of furniture.',
                imageUrl: 'https://images.unsplash.com/photo-1629078633038-d614b8214f7b?q=80&w=800'
            },
            {
                fabricName: 'Blue and White Ticking Stripe',
                description: 'A timeless pattern for accent pillows and chairs.',
                imageUrl: 'https://plus.unsplash.com/premium_photo-1679430193131-a8b4a0c57173?q=80&w=800'
            },
            {
                fabricName: 'Sheer Cotton Voile',
                description: 'Light-filtering and elegant for window treatments.',
                imageUrl: 'https://plus.unsplash.com/premium_photo-1692574628203-936d57cf46a1?q=80&w=800'
            },
            {
                fabricName: 'Weathered Denim',
                description: 'A comfortable, lived-in feel for casual upholstery.',
                imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800'
            },
        ]
    },
    {
        id: 'maximalist-dopamine',
        title: 'Maximalist Dopamine',
        description: 'Bold, vibrant, and joyful. More is more!',
        author: 'Iris Apfel',
        fabrics: [
            {
                fabricName: 'Emerald Green Velvet',
                description: 'Lush, decadent, and rich in color.',
                imageUrl: 'https://images.unsplash.com/photo-1600574044819-a634346517a9?q=80&w=800'
            },
            {
                fabricName: 'Leopard Print Hair-on-Hide',
                description: 'A neutral, but make it wild.',
                imageUrl: 'https://images.unsplash.com/photo-1593010375691-22c159f33339?q=80&w=800'
            },
            {
                fabricName: 'Hot Pink Silk',
                description: 'Unapologetically vibrant and luxurious.',
                imageUrl: 'https://images.unsplash.com/photo-1587609799979-997c274f3462?q=80&w=800'
            },
            {
                fabricName: 'Chinoiserie Toile',
                description: 'Intricate, classic patterns with a story to tell.',
                imageUrl: 'https://images.unsplash.com/photo-1520427309998-3f50a4d0411a?q=80&w=800'
            },
            {
                fabricName: 'Electric Blue Mohair',
                description: 'Soft, fuzzy, and shockingly beautiful.',
                imageUrl: 'https://images.unsplash.com/photo-1632738226065-288278453347?q=80&w=800'
            },
            {
                fabricName: 'Gold Lamé',
                description: 'For a touch of sparkle and high drama.',
                imageUrl: 'https://images.unsplash.com/photo-1586794689218-b2a8a5d38392?q=80&w=800'
            },
        ]
    },
    {
        id: 'japandi-zen',
        title: 'Japandi Zen',
        description: 'A hybrid of Japanese and Scandinavian aesthetics. Calm and minimalist.',
        author: 'Tadao Ando',
        fabrics: [
            {
                fabricName: 'Natural Oak Wood Grain',
                description: 'Not a fabric, but a key texture. We found a fabric that mimics it.',
                imageUrl: 'https://images.unsplash.com/photo-1558636815-1978d0419bff?q=80&w=800'
            },
            {
                fabricName: 'Washed Linen in Earth Tones',
                description: 'Soft, rumpled, and perfectly imperfect.',
                imageUrl: 'https://images.unsplash.com/photo-1596731362295-ec57b8a1c902?q=80&w=800'
            },
            {
                fabricName: 'Indigo Shibori Cotton',
                description: 'Hand-dyed patterns that are unique and organic.',
                imageUrl: 'https://images.unsplash.com/photo-1604866838338-73239a0d5c07?q=80&w=800'
            },
            {
                fabricName: 'Hemp Canvas',
                description: 'Durable, sustainable, and texturally interesting.',
                imageUrl: 'https://images.unsplash.com/photo-1621343429390-34185c49b071?q=80&w=800'
            },
            {
                fabricName: 'Charcoal Gray Felt',
                description: 'Provides sound absorption and a sense of coziness.',
                imageUrl: 'https://images.unsplash.com/photo-1559981423-e221b6d76f82?q=80&w=800'
            },
            {
                fabricName: 'Undyed Raw Silk',
                description: 'Subtle texture and a beautiful natural sheen.',
                imageUrl: 'https://images.unsplash.com/photo-1617053305953-5d7537b01859?q=80&w=800'
            },
        ]
    }
];
