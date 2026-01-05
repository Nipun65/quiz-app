export type Option = {
  id: string;
  label: string;
};

export type Question = {
  id: string;
  question: string;
  options: Option[];
  answer: string;
  subject: string;
};
