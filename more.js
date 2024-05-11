*
const number = [1,2,3,4,5]
const doubleNumber = useMemo(() => numbers.map((n) =>  n*2),[])

return(

    <div>
    {doubleNumber.map((number) =>(
        <p key={number}>{number}</p>
    ))}
    </div>
)

function TestCom(props){
const [count,setCount] = useState(props.initialCount)
const handleClick = () => {
    setCount(count+1)
}
    return(
        <div>

        <p>{count}</p>
        <button onClick={handleClick}>increment</button>
        </div>
        
    )
}


const increment = useCallback(() => {
    setCount(count+1)
},[])

return(
    <button onClick={increment}>increment</button>
    <p>{count}</p>
)


javascript
let say there is a bridge made up of wooden planks
connecting two mountains and its represent as an array of 1's and 0's

> 1 represnt the plank that are intact
> 0 represnt the plank that are broken
bridge = [1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1]

if bridge has more than 1 consecuitve holes
it is considered as NOT crossable

//crossable
[1,0,1,1,1,0,1,0,1,1,1,1,1,1]

//uncrossable
[1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1]


additionally you have a few wooden plank of various size lying around reperesnt as follow

extraPlank = [5,3,2,1,1]

A plank size 3 can be used to patch upto 3 consecutive holes.
you can also use plank size 2 at patch 3 consecuitve holes
as it would bring down the number
of consecuitve hole to just one hole which deemed crossable


javascript

find the longest substring within a string with no repeated characters

input > abca
output > abc or bca

input > aaa
output> a

input > abcd
output> abcd

javascript
we have 2 input one array
let a = [1,2,3,4,5,6]
n = 4
write logic to return output as
[1,2,3,4]
[5,6,1,2]
[3,4,5,6]
[1,2,3,4]

length of each subarray in out is length 4
irrespective of value of n
n will be number of subarray
if n = 5
[1,2,3,4]
[5,6,1,2]
[3,4,5,6]
[1,2,3,4]
[5,6,1,2]
