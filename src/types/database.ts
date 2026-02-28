export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          display_name: string | null;
          avatar_url: string | null;
          version: string;
          created_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          version?: string;
          created_at?: string;
        };
        Update: {
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          version?: string;
        };
        Relationships: [];
      };
      puzzles: {
        Row: {
          id: string;
          puzzle_date: string;
          engine_type: string;
          config: Json;
          day_of_week: number | null;
          week_number: number | null;
          grade_band: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          puzzle_date: string;
          engine_type: string;
          config: Json;
          day_of_week?: number | null;
          week_number?: number | null;
          grade_band?: string | null;
        };
        Update: {
          config?: Json;
        };
        Relationships: [];
      };
      attempts: {
        Row: {
          id: string;
          user_id: string;
          puzzle_id: string;
          started_at: string;
          completed_at: string | null;
          time_taken_seconds: number | null;
          completed: boolean;
          moves: number | null;
          hints_used: number;
          share_text: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          puzzle_id: string;
          started_at?: string;
          completed_at?: string | null;
          time_taken_seconds?: number | null;
          completed?: boolean;
          moves?: number | null;
          hints_used?: number;
          share_text?: string | null;
        };
        Update: {
          completed_at?: string | null;
          time_taken_seconds?: number | null;
          completed?: boolean;
          moves?: number | null;
          hints_used?: number;
          share_text?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, { Row: Record<string, unknown>; Relationships: [] }>;
    Functions: Record<string, { Args: Record<string, unknown>; Returns: unknown }>;
    Enums: Record<string, string[]>;
    CompositeTypes: Record<string, Record<string, string | null>>;
  };
}
