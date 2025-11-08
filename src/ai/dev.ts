import { config } from 'dotenv';
config();

import '@/ai/flows/fabric-suggestion-from-query.ts';
import '@/ai/flows/refine-fabric-suggestions.ts';
import '@/ai/flows/similar-fabric-search.ts';
import '@/ai/flows/visual-search-for-fabrics.ts';
import '@/ai/flows/summarize-fabric-details.ts';