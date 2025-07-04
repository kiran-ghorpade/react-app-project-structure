/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * ADRASHA AUTH-SERVICE API Docs
 * OpenAPI spec version: 1.0.0
 */
import type { MediaTypeParameters } from './mediaTypeParameters';

export interface MediaType {
  type?: string;
  subtype?: string;
  parameters?: MediaTypeParameters;
  qualityValue?: number;
  concrete?: boolean;
  wildcardType?: boolean;
  wildcardSubtype?: boolean;
  subtypeSuffix?: string;
  charset?: string;
}
