import styled from "styled-components";

export const DiscoverWrap = styled.div`
    .top{
        height:30px;
        background-color: #C20C0C;
    }
`
export const TopMenu = styled.div`
    display:flex;
    padding-left: 180px;
    position: relative;
    top: -4px;
    .item{
        a{
            display:inline-block;
            padding:0px 13px;
            margin:7px 17px 0px;
            height:20px;
            line-height:20px;
            color:#fff;
            
            &:hover,&.active{
                text-decoration:none;
                background-color: #9B0909;
                border-radius: 20px;
            }
        }
        
    }
`