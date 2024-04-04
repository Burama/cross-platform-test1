import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AnglesService {
  constructor() {}

  addAngles(
    degrees1: number,
    minutes1: number,
    seconds1: number,
    degrees2: number,
    minutes2: number,
    seconds2: number
  ): { degrees: number; minutes: number; seconds: number } {
    let totalDegrees = degrees1 + degrees2;
    let totalMinutes = minutes1 + minutes2;
    let totalSeconds = seconds1 + seconds2;

    if (totalSeconds >= 60) {
      totalMinutes++;
      totalSeconds -= 60;
    }
    if (totalMinutes >= 60) {
      totalDegrees++;
      totalMinutes -= 60;
    }

    return {
      degrees: totalDegrees,
      minutes: totalMinutes,
      seconds: totalSeconds,
    };
  }

  subtractAngles(
    degrees1: number,
    minutes1: number,
    seconds1: number,
    degrees2: number,
    minutes2: number,
    seconds2: number
  ): { degrees: number; minutes: number; seconds: number } {
    let totalDegrees = degrees1 - degrees2;
    let totalMinutes = minutes1 - minutes2;
    let totalSeconds = seconds1 - seconds2;

    if (totalSeconds < 0) {
      totalMinutes--;
      totalSeconds += 60;
    }
    if (totalMinutes < 0) {
      totalDegrees--;
      totalMinutes += 60;
    }

    return {
      degrees: totalDegrees,
      minutes: totalMinutes,
      seconds: totalSeconds,
    };
  }
}
