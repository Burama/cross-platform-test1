import { TestBed } from '@angular/core/testing';
import { AnglesService } from './angles.service';

describe('AnglesService', () => {
  let service: AnglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addAngles', () => {
    it('should add two angles correctly', () => {
      const result = service.addAngles(30, 20, 10, 40, 15, 20);
      expect(result).toEqual({ degrees: 70, minutes: 35, seconds: 30 });
    });

    it('should handle carrying over seconds to minutes', () => {
      const result = service.addAngles(30, 20, 50, 40, 15, 20);
      expect(result).toEqual({ degrees: 70, minutes: 36, seconds: 10 });
    });

    it('should handle carrying over minutes to degrees', () => {
      const result = service.addAngles(30, 50, 50, 40, 15, 20);
      expect(result).toEqual({ degrees: 71, minutes: 6, seconds: 10 });
    });
  });

  describe('subtractAngles', () => {
    it('should subtract two angles correctly', () => {
      const result = service.subtractAngles(40, 15, 20, 30, 20, 10);
      expect(result).toEqual({ degrees: 9, minutes: 55, seconds: 10 });
    });

    it('should handle borrowing from minutes', () => {
      const result = service.subtractAngles(40, 15, 20, 30, 20, 50);
      expect(result).toEqual({ degrees: 9, minutes: 54, seconds: 30 });
    });

    it('should handle borrowing from degrees', () => {
      const result = service.subtractAngles(40, 15, 20, 41, 20, 50);
      expect(result).toEqual({ degrees: -2, minutes: 54, seconds: 30 });
    });
  });
});
