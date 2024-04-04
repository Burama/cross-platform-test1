import { Component } from "@angular/core";
import { AnglesService } from "./services/angles.service";

type FormData = {
  degrees1: number;
  minutes1: number;
  seconds1: number;
  degrees2: number;
  minutes2: number;
  seconds2: number;
}

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
 anglesSum: {
  degrees: number,
  minutes: number,
  seconds: number,
 } | undefined;
 anglesSubtraction: {
  degrees: number,
  minutes: number,
  seconds: number,
 } | undefined;

  constructor(public anglesService: AnglesService) { }

  private handleSum (formData: FormData) {
    const { degrees: anglesDegreesSum, minutes: anglesMinutesSum, seconds: anglesSecondsSum } = this.anglesService.addAngles(
      formData.degrees1, 
      formData.minutes1,
      formData.seconds1,
      formData.degrees2,
      formData.minutes2,
      formData.seconds2,
    )
    this.anglesSum = {
      degrees: anglesDegreesSum,
      minutes: anglesMinutesSum,
      seconds: anglesSecondsSum,
    }
  }

  private handleSubtraction (formData: FormData) {
    const { degrees: anglesDegreesSubtraction, minutes: anglesMinutesSubtraction, seconds: anglesSecondsSubtraction } = this.anglesService.subtractAngles(
      formData.degrees1, 
      formData.minutes1,
      formData.seconds1,
      formData.degrees2,
      formData.minutes2,
      formData.seconds2,
    )
    this.anglesSubtraction = {
      degrees: anglesDegreesSubtraction,
      minutes: anglesMinutesSubtraction,
      seconds: anglesSecondsSubtraction,
    }
  }

  handleSubmit(formData: FormData) {
    this.handleSum(formData);
    this.handleSubtraction(formData);
  }
}
