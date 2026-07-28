import type { ComponentType } from "react";
import StudyGuide from "./aws-cloud-practitioner-clf-c02-study-guide-2026";
import ExamCostFormat from "./aws-cloud-practitioner-exam-cost-format-requirements";
import PracticeQuestions from "./aws-cloud-practitioner-practice-questions";
import VsSolutionsArchitect from "./aws-cloud-practitioner-vs-solutions-architect-associate";
import ExamTips from "./aws-cloud-practitioner-exam-tips";

export const contentMap: Record<string, ComponentType> = {
  "aws-cloud-practitioner-clf-c02-study-guide-2026": StudyGuide,
  "aws-cloud-practitioner-exam-cost-format-requirements": ExamCostFormat,
  "aws-cloud-practitioner-practice-questions": PracticeQuestions,
  "aws-cloud-practitioner-vs-solutions-architect-associate": VsSolutionsArchitect,
  "aws-cloud-practitioner-exam-tips": ExamTips,
};
