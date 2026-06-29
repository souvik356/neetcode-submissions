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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head || !head.next) return false
        let f = head
        let s = head.next.next

        while(s && s.next){
            if(f == s){
                return true
            }
            f=f.next
            s=s.next.next
        }
        return false
    }
}
