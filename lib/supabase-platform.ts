import { createClient } from '@supabase/supabase-js';

// OwnerClone Platform Database (separate from blog)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PLATFORM_URL || 'https://zuwwgpigybchmnosdrzt.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PLATFORM_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1d3dncGlneWJjaG1ub3Nkcnp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NjExOTgsImV4cCI6MjA4NTAzNzE5OH0.M1QW_1rLObqE_wb4u4z78FPewrTLtWfEEdppnlQpyNc';

export const supabasePlatform = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for the platform database
export type Database = {
  public: {
    Tables: {
      // User profiles (extends auth.users)
      profiles: {
        Row: {
          id: string; // matches auth.users.id
          email: string;
          name: string;
          phone: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>;
      };

      // Organizations (business entities - can own multiple restaurants)
      organizations: {
        Row: {
          id: string;
          name: string;
          owner_id: string; // links to profiles.id
          billing_email: string;
          subscription_tier: 'free' | 'starter' | 'professional' | 'enterprise';
          subscription_status: 'active' | 'past_due' | 'canceled' | 'trialing';
          trial_ends_at: string | null;
          stripe_customer_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['organizations']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['organizations']['Insert']>;
      };

      // Restaurants (locations)
      restaurants: {
        Row: {
          id: string;
          organization_id: string;
          name: string;
          website: string | null;
          phone: string | null;
          address: string | null;
          city: string | null;
          state: string | null;
          zip: string | null;
          timezone: string;
          cuisine_type: string | null;
          service_type: 'full_service' | 'quick_service' | 'fast_casual' | 'bar' | 'cafe' | 'other';
          pos_system: 'toast' | 'square' | 'clover' | 'lightspeed' | 'revel' | 'aloha' | 'micros' | 'other' | null;
          pos_connected: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['restaurants']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['restaurants']['Insert']>;
      };

      // Team members (users linked to restaurants with roles)
      team_members: {
        Row: {
          id: string;
          profile_id: string; // links to profiles.id
          organization_id: string;
          restaurant_id: string | null; // null = access to all locations
          role: 'owner' | 'multi_manager' | 'manager' | 'supervisor' | 'staff';
          permissions: Record<string, boolean>;
          invited_by: string | null;
          invited_at: string | null;
          accepted_at: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['team_members']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['team_members']['Insert']>;
      };

      // Team invitations (pending invites)
      team_invitations: {
        Row: {
          id: string;
          organization_id: string;
          restaurant_id: string | null;
          email: string;
          role: 'multi_manager' | 'manager' | 'supervisor' | 'staff';
          invited_by: string;
          token: string;
          expires_at: string;
          accepted_at: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['team_invitations']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['team_invitations']['Insert']>;
      };

      // Sales data (for Prophet predictions)
      sales_data: {
        Row: {
          id: string;
          restaurant_id: string;
          date: string;
          hour: number | null; // 0-23, null for daily totals
          revenue: number;
          covers: number; // guest count
          avg_ticket: number;
          labor_cost: number | null;
          food_cost: number | null;
          weather_condition: string | null;
          weather_temp: number | null;
          is_holiday: boolean;
          holiday_name: string | null;
          local_event: string | null;
          day_of_week: number; // 0=Sunday, 6=Saturday
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['sales_data']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['sales_data']['Insert']>;
      };

      // Invoices (for food cost tracking)
      invoices: {
        Row: {
          id: string;
          restaurant_id: string;
          vendor_id: string | null;
          invoice_number: string | null;
          invoice_date: string;
          due_date: string | null;
          subtotal: number;
          tax: number;
          total: number;
          status: 'pending' | 'paid' | 'overdue' | 'disputed';
          file_url: string | null;
          ocr_processed: boolean;
          ocr_data: Record<string, any> | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['invoices']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['invoices']['Insert']>;
      };

      // Vendors
      vendors: {
        Row: {
          id: string;
          organization_id: string;
          name: string;
          contact_name: string | null;
          email: string | null;
          phone: string | null;
          address: string | null;
          category: 'food' | 'beverage' | 'supplies' | 'equipment' | 'services' | 'other';
          payment_terms: string | null;
          account_number: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['vendors']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['vendors']['Insert']>;
      };

      // Alerts/Notifications
      alerts: {
        Row: {
          id: string;
          restaurant_id: string;
          user_id: string | null; // null = all users at restaurant
          type: 'theft' | 'cost_spike' | 'inventory_low' | 'labor_high' | 'sales_anomaly' | 'system' | 'custom';
          severity: 'info' | 'warning' | 'critical';
          title: string;
          message: string;
          data: Record<string, any> | null;
          is_read: boolean;
          read_at: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['alerts']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['alerts']['Insert']>;
      };

      // Aggregated network data (anonymized for Prophet)
      network_analytics: {
        Row: {
          id: string;
          date: string;
          cuisine_type: string;
          service_type: string;
          region: string; // state or metro area
          restaurant_count: number; // min 5 for anonymity
          avg_revenue: number;
          avg_covers: number;
          avg_ticket: number;
          weather_impact: number | null; // % change from baseline
          day_of_week: number;
          is_holiday: boolean;
          holiday_name: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['network_analytics']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['network_analytics']['Insert']>;
      };
    };
  };
};

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Organization = Database['public']['Tables']['organizations']['Row'];
export type Restaurant = Database['public']['Tables']['restaurants']['Row'];
export type TeamMember = Database['public']['Tables']['team_members']['Row'];
export type SalesData = Database['public']['Tables']['sales_data']['Row'];
export type Invoice = Database['public']['Tables']['invoices']['Row'];
export type Alert = Database['public']['Tables']['alerts']['Row'];

// Role type
export type UserRole = 'owner' | 'multi_manager' | 'manager' | 'supervisor' | 'staff';

// Permission keys
export type PermissionKey = 
  | 'view_sales'
  | 'view_labor'
  | 'view_food_cost'
  | 'edit_menu'
  | 'manage_inventory'
  | 'manage_staff'
  | 'manage_schedules'
  | 'approve_invoices'
  | 'view_reports'
  | 'export_data'
  | 'manage_settings'
  | 'billing';

// Default permissions by role
export const DEFAULT_PERMISSIONS: Record<UserRole, Record<PermissionKey, boolean>> = {
  owner: {
    view_sales: true,
    view_labor: true,
    view_food_cost: true,
    edit_menu: true,
    manage_inventory: true,
    manage_staff: true,
    manage_schedules: true,
    approve_invoices: true,
    view_reports: true,
    export_data: true,
    manage_settings: true,
    billing: true,
  },
  multi_manager: {
    view_sales: true,
    view_labor: true,
    view_food_cost: true,
    edit_menu: true,
    manage_inventory: true,
    manage_staff: true,
    manage_schedules: true,
    approve_invoices: true,
    view_reports: true,
    export_data: true,
    manage_settings: false,
    billing: false,
  },
  manager: {
    view_sales: true,
    view_labor: true,
    view_food_cost: true,
    edit_menu: true,
    manage_inventory: true,
    manage_staff: true,
    manage_schedules: true,
    approve_invoices: false,
    view_reports: true,
    export_data: false,
    manage_settings: false,
    billing: false,
  },
  supervisor: {
    view_sales: true,
    view_labor: true,
    view_food_cost: false,
    edit_menu: false,
    manage_inventory: true,
    manage_staff: false,
    manage_schedules: true,
    approve_invoices: false,
    view_reports: false,
    export_data: false,
    manage_settings: false,
    billing: false,
  },
  staff: {
    view_sales: false,
    view_labor: false,
    view_food_cost: false,
    edit_menu: false,
    manage_inventory: false,
    manage_staff: false,
    manage_schedules: false,
    approve_invoices: false,
    view_reports: false,
    export_data: false,
    manage_settings: false,
    billing: false,
  },
};
