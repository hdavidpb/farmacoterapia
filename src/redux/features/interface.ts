export interface IInitialState {
  patient: IPatient[];
  loading: boolean;
}

export interface IPatient {
  patient_id: string;
  patient_name: string;
  patient_document: string;
  patient_documentType: string;
  patient_contract: string | null;
  patient_age: number | string;
  patient_treatingDoctor: null | string;
  patient_epsId: string;
}
