import { useRef, useState } from "react";

// 使用 useRef 实现防抖函数
function SearchBar(){
    const [query,setQuery] = useState('');
    const debounceRef = useRef(null)
    const handleInputChange = (e)=>{
        const value = e.target.value;
        if(debounceRef.current){
            clearTimeout(debounceRef.current)
        }
        debounceRef.current = setTimeout(()=>{
            setQuery(value)
        },1000)
    }
    
}