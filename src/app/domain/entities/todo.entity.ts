

export class TodoEntity {
   constructor(
    public readonly id: number,
    public readonly todo : number,
    public readonly completed : number,
    public readonly userId : number,
    ) {

   }


   public static fromDAO(  props : {[key:string] : any}) {
    const { id, todo, completed, userId} = props;

    if(!id ) return ['Id is required' , undefined];
    if(!todo) return ['Todo is required' , undefined];
    if(!completed  ) return ['Completed is required' , undefined];
    if(!userId ) return ['User Id is required' , undefined];


    return [undefined, new TodoEntity(id, todo, completed ,userId)]
   }

   public static fromObject() {
    throw new Error('Not implemented yet');
   }
}
