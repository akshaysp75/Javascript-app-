fuction findUniqueUsers(list1, list2) {
  
  // Get a unique set of users from List1 which are not in List2
  
  const uniqueList1 = list1.filter(user => !list2.includes(user));

  // Get a unique set of users from List2 which are not in List1
  
  const uniqueList2 = list2.filter(user => !list1.includes(user));

  // Get a set of users who are present in List1 and List2 both (intersection of list1 & list2)
  
  const intersectionList = list1.filter(user => list2.includes(user));

  return [uniqueList1, uniqueList2, intersectionList];
}

// Test the function with the given lists
const List1 = [];
const List2 = []

const [uniqueList1, uniqueList2, intersectionList] = findUniqueUsers(List1, List2);

console.log("Unique users in List1 not present in List2:", uniqueList1);
console.log("Unique users in List2 not present in List1:", uniqueList2);
console.log("Users present in both List1 and List2:", intersectionList);
