// Given the head of a sorted linked list, 
// delete all duplicates such that each element appears only once. Return the linked list sorted as well.

function deleteDuplicates(head){
    let current = head;

    while(current !== null && current.next !== null){
        if(current.value === current.next.value){
            current.next = current.next.next
        }
        else{
            current = current.next
        }
    }
    return head;
}