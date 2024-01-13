import { MissionRequestState } from '../enum/MissionRequestState';

export class MissionRequestDto {
  id: number;
  professorId ?: number;
  professorFullName ?: string;
  requestDate: Date;
  missionTitle: string;
  missionDescription: string;
  state: MissionRequestState;
  missionStartDate: Date;
  missionEndDate: Date;
  destination: string;
  missionOrder ?: string

  // Constructor
  constructor(
    id?: number,
    professorId?: number,
    professorFullName?: string,
    requestDate?: Date,
    state?: MissionRequestState,
    title?: string,
    description?: string,
    startDate?: Date,
    endDate?: Date,
    destination?: string,
    missionOrder?: string
  ) {
    this.id = id || 0;
    this.professorFullName = professorFullName;
    this.requestDate = requestDate || new Date();
    this.state = state || MissionRequestState.CREATED;
    this.missionTitle = title || '';
    this.missionDescription = description || '';
    this.missionStartDate = startDate || new Date();
    this.missionEndDate = endDate || new Date();
    this.destination = destination || '';
    this.missionOrder = missionOrder;
    this.professorId = professorId;
  }

  // Getter for id
  getId(): number {
    return this.id;
  }

  // Setter for id
  setId(id: number): void {
    this.id = id;
  }

  // Getter and Setter for requestDate
  getRequestDate(): Date {
    return this.requestDate;
  }

  setRequestDate(requestDate: Date): void {
    this.requestDate = requestDate;
  }

  // Getter for state
  getState(): MissionRequestState {
    return this.state;
  }

  // Setter for state
  setState(state: MissionRequestState): void {
    this.state = state;
  }


  // Getter for title
  getTitle(): string {
    return this.missionTitle;
  }

  // Setter for title
  setTitle(title: string): void {
    this.missionTitle = title;
  }


  // Getter for description
  getDescription(): string {
    return this.missionDescription;
  }

  // Setter for description
  setDescription(description: string): void {
    this.missionDescription = description;
  }

  // Getter and Setter for startDate
  getStartDate(): Date {
    return this.missionStartDate;
  }

  setStartDate(startDate: Date): void {
    this.missionStartDate = startDate;
  }

  // Getter and Setter for endDate
  getEndDate(): Date {
    return this.missionEndDate;
  }

  setEndDate(endDate: Date): void {
    this.missionEndDate = endDate;
  }

  // Getter and Setter for destination
  getDestination(): string {
    return this.destination;
  }

  setDestination(destination: string): void {
    this.destination = destination;
  }

  // Getter and Setter for missionOrder
  getMissionOrder(): string | undefined {
    return this.missionOrder;
  }

  setMissionOrder(missionOrder: string): void {
    this.missionOrder = missionOrder;
  }
}

