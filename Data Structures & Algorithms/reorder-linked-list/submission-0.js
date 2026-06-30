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
     * @return {void}
     */
    reorderList(head) {
        let node = []
        let curr = head
        while(curr){
            node.push(curr)
            curr=curr.next
        }
        let i = 0
        let j = node.length-1
        while(i<j){
            node[i].next = node[j]
            i=i+1
            if(i==j) break
            node[j].next = node[i]
            j=j-1
        }
        node[i].next = null
    }
}
