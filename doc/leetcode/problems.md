### 1. Two Sum

https://leetcode.com/problems/two-sum/description/

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};
```

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let cache = {};
    for (let i = 0; i < nums.length; i++) {
        if (cache.hasOwnProperty(target - nums[i])) {
            return [cache[target - nums[i]], i];
        }
        cache[nums[i]] = i;
    }
    return [];
};
```

### 2. Add Two Numbers

https://leetcode.com/problems/add-two-numbers/description/

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let header = new ListNode(null);
    let cursor = header;
    let addition = 0;
    let tmp;
    while (l1.val != null || l2.val != null) {
        tmp = (l1.val || 0) + (l2.val || 0) + addition;
        cursor.next = new ListNode(tmp < 10 ? tmp : (tmp - 10));
        cursor = cursor.next;
        addition = tmp < 10 ? 0 : 1;
        l1 = l1.next ? l1.next : { val: null };
        l2 = l2.next ? l2.next : { val: null };
    }
    if (addition) {
        cursor.next = new ListNode(addition);
    }
    return header.next;
};
```

### 3. Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s ? s.length : 0;
    if (len <= 1) {
        return len;
    }

    let c = 0
    let max = 0;
    let map = {};

    for (let i = 0; i < len; i++) {
        while (c < len && !map[s.charAt(c)]) {
            max = Math.max(max, c - i + 1);
            map[s.charAt(c)] = 1;
            c++;
        }
        map[s.charAt(i)] = 0
    }
    return max;
};
```

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s ? s.length : 0;
    if (len <= 1) {
        return len;
    }

    let map = {};
    let l = 0;
    let r = 0;
    let char;
    let max = 0;

    while (r < len && l < len) {
        char = s.charAt(r);
        if (map[char] == null || map[char] < l) {
            max = Math.max(max, r - l + 1);
            map[char] = r;
        } else {
            l = map[char] + 1;
            map[char] = r;
        }
        r++;
    }
    return max;
};
```

### 4. Median of Two Sorted Arrays

https://leetcode.com/problems/median-of-two-sorted-arrays/description/

```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const targets = [Math.floor((len1 + len2) / 2)];
    if ((len1 + len2) % 2 === 0) {
        targets.push(Math.floor((len1 + len2) / 2) - 1);
    }

    let i = 0;
    let j = 0;
    let cursor = -1;
    let curVal;
    let medSum = 0;
    let medCount = 0;

    while (cursor <= targets[0]) {
        if (nums2[j] === undefined || nums1[i] < nums2[j]) {
            curVal = nums1[i];
            i++;
        } else if (nums1[i] === undefined || nums1[i] >= nums2[j]) {
            curVal = nums2[j];
            j++;
        }
        cursor++;

        if (cursor === targets[0] || cursor === targets[1]) {
            medSum += curVal;
            medCount++;
        }
    }
    return medSum / medCount;
};
```

### 5. Longest Palindromic Substring

https://leetcode.com/problems/longest-palindromic-substring/description/

