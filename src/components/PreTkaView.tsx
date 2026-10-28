import React from 'react';
import { UserProfile, QuizConfig, SubjectId } from '../types';
import { DiagnosticTestView } from './DiagnosticTestView';

interface PreTkaViewProps {
  userProfile: UserProfile;
  initialSubject?: SubjectId;
  onStartQuiz: (config: QuizConfig) => void;
  onBack: () => void;
}

export const PreTkaView: React.FC<PreTkaViewProps> = (props) => {
  return <DiagnosticTestView {...props} />;
};
