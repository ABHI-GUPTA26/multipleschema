
      //this standered formate to handle the error
class apiError extends error{
   constructor(
         statusCode,
         message="something went wrong",
         errors=[],// if you want to send array of error 
         statck=""
   ){   
          super(message),
       this.statusCode=statusCode,
         this.message=message,
         this.errors=errors,
         this.data=null,
         this.success=true
         if(statck){
            this.stack=statck

         }else{
            Error.captureStackTrace(this,this.constructor)
         }
   }
}
export {apiError}