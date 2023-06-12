import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  
  public Editor = ClassicEditor;
  teamsForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<TeamsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder,private httpService: HttpService) {
  }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    const leadForm = this.fb.group({
      name: [''],
      profile: [''],
      designation: [''],
      description: ['']
    });

    this.teamsForm = this.fb.group({
      header: [''],
      bannerImg: [''],
      boardFormArray: this.fb.array([leadForm]),
      leadersFormArray: this.fb.array([leadForm])
    })
  }

  get leadersFrm() { return (this.teamsForm.get('leadersFormArray') as FormArray).controls}

  get boardFrm() { return (this.teamsForm.get('boardFormArray') as FormArray).controls}

  closePopup(): void {
    this.dialogRef.close(null);
  }

  handleFileInput(event: any,type: string,index: number): void {
    if(index == -1){
      this.teamsForm.controls[type].setValue(event?.target?.files);
      return;
    }

    let arr = (this.teamsForm.controls[type] as FormArray);
    let fb = (arr.controls[index] as FormGroup)
    fb.controls['profile'].setValue(event?.target?.files[0]);
    // this.fileData = event?.target?.files;
  }

  deleteRow(type: string, index: number){

  }

  validateAndPushDataToFormArray(type: string, index: number){
    let array = this.teamsForm.get(type) as FormArray;
    array.push(this.fb.group({
      name: [''],
      profile: [''],
      designation: [''],
      description: ['']
    }));
  }

  submit(){
    let formData = new FormData();

    formData.append(`header`,this.teamsForm.controls['header'].value);
    formData.append(`bannerImg`,this.teamsForm.controls['bannerImg'].value);

    let array = this.teamsForm.get('leadersFormArray') as FormArray;
    for(let i=0; i <  array.controls.length; i++){
      let fb = (array.controls[i] as FormGroup).controls;
     
      formData.append(`leaders[${i}]['name]`,fb['name'].value);
      formData.append(`leaders[${i}]['designation]`,fb['designation'].value);
      formData.append(`leaders[${i}]['description]`,fb['description'].value);
      formData.append(`leaders[${i}]['leadersProfile]`,fb['profile'].value);
    }

    array = this.teamsForm.get('boardFormArray') as FormArray;
    for(let i=0; i <  array.controls.length; i++){
      let fb = (array.controls[i] as FormGroup).controls;
      
      formData.append(`boardOfDirectors[${i}]['name]`,fb['name'].value);
      formData.append(`boardOfDirectors[${i}]['designation]`,fb['designation'].value);
      formData.append(`boardOfDirectors[${i}]['description]`,fb['description'].value);
      formData.append(`boardOfDirectors[${i}]['boardProfile]`,fb['profile'].value);
    }

    this.httpService.httpPostFormData(ApiUrls.teams.saveTeams,formData).subscribe(res => {});
  }

}
