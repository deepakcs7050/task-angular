export interface School {
  dbn: string;
  school_name: string;
  location: string;
  phone_number: string;
  // Add other fields as needed
}

export interface SatScores {
  dbn: string;
  sat_math_avg_score: string;
  sat_critical_reading_avg_score: string;
  sat_writing_avg_score: string;
}
