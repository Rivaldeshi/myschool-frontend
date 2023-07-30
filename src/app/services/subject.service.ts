import { Injectable } from '@angular/core';
import { Subjet } from '../models/Subjet';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }


  Subjets: Subjet[] = [{ id: 1, name: 'MATH', description: "Descript1" },
  { id: 1, name: 'PHYSIQUE', description: "Descript2" }

  ];

  // Read operation - Get all Subjets
  getSubjets(): Subjet[] {
    return this.Subjets;
  }

  // Read operation - Get a Subjet by ID
  getSubjetById(id: number): Subjet | undefined {
    return this.Subjets.find(Subjet => Subjet.id === id);
  }

  // Create operation - Add a new Subjet
  addSubjet(Subjet: Subjet): void {
    this.Subjets.push(Subjet);
  }

  // Update operation - Update an existing Subjet
  updateSubjet(updatedSubjet: Subjet): void {
    const index = this.Subjets.findIndex(Subjet => Subjet.id === updatedSubjet.id);
    if (index !== -1) {
      this.Subjets[index] = updatedSubjet;
    }
  }

  // Delete operation - Delete a Subjet by ID
  deleteSubjet(id: number): void {
    this.Subjets = this.Subjets.filter(Subjet => Subjet.id !== id);
  }
}
