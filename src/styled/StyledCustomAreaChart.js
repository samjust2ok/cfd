import styled from 'styled-components';

const StyledCustomAreaChart = styled.div`
    width:100%;
    height: 200px;
`;

const StyledDataView = styled.div`
    height:100px;
    width:200px;
    border-radius:5px;
    box-shadow: 0px 0px 15px rgba(0,0,0,.4);
    background-color:${props=>props.theme.darkShade1};
    color:white;
    padding:10px 15px;

    .Header{
        margin-bottom:0 !important;
        padding:0 !important;
        img{
            height:20px;
            margin:0;
            padding:0;
        }
    }

    .Content{
        p{
            font-size:14px;

            span{
                font-weight:600;
            }
        }
    }
`;

export { StyledCustomAreaChart as default, StyledDataView};