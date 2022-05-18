import { FormControl } from '@angular/forms'


export class DateFormControl extends FormControl {
   
  override setValue(value: any, options: any) {

   if(!value){
     super.setValue('', { ...options, emitModelToViewChange: true })
     return;
   }
   
  //   console.log(value.length)
  //   console.log(this.value.length)
    if (value.match(/[^0-9|\/]/gi)) {
      
      super.setValue(this.value, {
        ...options, emitModelToViewChange: true
      })
      return
    }

    if(value.length>5){
      super.setValue(this.value, { ...options, emitModelToViewChange: true })
      return;
    }

    if(value.length===2 && this.value.length===3){
      console.log(this.value.length)
      
      super.setValue(value, { ...options, emitModelToViewChange: true })
      return;
    }

    if (value.length === 2) {
      super.setValue(value + "/", { ...options, emitModelToViewChange: true })
      return
    }
    super.setValue(value, { ...options, emitModelToViewChange: true })
  }

}
