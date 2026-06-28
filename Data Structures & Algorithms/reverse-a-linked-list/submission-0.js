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
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head
        let preve = null

        while(curr){
            let temp = curr.next
            curr.next = preve
            preve = curr
            curr = temp
        }
        return preve
    }
}
