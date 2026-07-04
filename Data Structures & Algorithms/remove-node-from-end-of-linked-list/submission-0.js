/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
       let length = 0
       let curr = head

       while(curr){
        length+=1
        curr=curr.next
       }

       let num = length - n

       let sentinelNode = new ListNode()
       let head1 = sentinelNode

       sentinelNode.next = head

       for(let i=0;i<num;i++){
        sentinelNode = sentinelNode.next
       }

       sentinelNode.next = sentinelNode.next.next

       return head1.next
    }
}
