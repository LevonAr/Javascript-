class Linked_List {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        if(this.head==null){
            this.head = new ListNode(element)
            console.log(this.head, this.size)
            this.size ++
        }
        else{
            let Ptr = this.head
            while (Ptr.next) { 
                Ptr = Ptr.next; 
            } 
            console.log(Ptr, this.size)                        
            Ptr.next = new ListNode(element) 
            console.log(Ptr, this.size)            
            this.size ++
        }
    }
}

var addTwoNumbers = function(l1, l2) {
     let l1_hashmap = new Map
     let l1_digit_counter = 0
     for(let ptr = l1; ptr != null; ptr = ptr.next){
        l1_hashmap.set(l1_digit_counter, ptr.val)
        l1_digit_counter ++ 
     }    

        
     let l2_hashmap = new Map
     let l2_digit_counter = 0
     for(let ptr = l2; ptr != null; ptr = ptr.next){
        l2_hashmap.set(l2_digit_counter, ptr.val)
        l2_digit_counter ++ 
     }
    
     let l1_flipped_string =""
    
     for(let i = l1_hashmap.size-1 ; i >= 0; i--){
         let num = l1_hashmap.get(i)
         let str = num.toString()
         l1_flipped_string = l1_flipped_string + str
     }    

     let l1_flipped_number = parseInt(l1_flipped_string)
          
     let l2_flipped_string = ""
     
     for(let i = l2_hashmap.size-1; i >= 0; i--){
         let num = l2_hashmap.get(i)
         let str = num.toString()
         l2_flipped_string = l2_flipped_string + str
     }
     let l2_flipped_number = parseInt(l2_flipped_string)
     
     let final_sum = l1_flipped_number + l2_flipped_number
          
     let final_sum_string = final_sum.toString()

     let final_sum_digits = final_sum_string.length
               
     let final_linked_list = new Linked_List     
     
     for(let i = final_sum_digits-1; i >= 0; i--){
         let char = final_sum_string.charAt(i)
         let num = parseInt(char)         
         final_linked_list.add(num)   
     }
        return (final_linked_list.head)    
};
    
