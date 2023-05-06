import { useState, useCallback } from "react";

type NavigationProps = {
    navType:string,
    switchNavType: (data:string)=>void
};

const useNavigation = (): NavigationProps => {
    const [navType,setNavType] = useState('무료 공간');
    const switchNavType = useCallback((data:string)=> setNavType(data),[]);

    return {navType,switchNavType};
}

export default useNavigation;