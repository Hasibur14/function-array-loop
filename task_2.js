/** Task:
 * Find the friend with the smallest name.
   const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

function findFriends(friends) {
    let result = friends[0];
    for (const friend of friends) {
        if (friend.length < result.length) {
            result = friend;
        }
    }
    return result;
}
const friendEver = findFriends(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log("Smallest name is: ", friendEver);