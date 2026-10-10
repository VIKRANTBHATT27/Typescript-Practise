import { createContext } from 'react';
import type { Chai } from './types/chai.types.ts';

export const MyContext = createContext<Chai[] | null>(null);