import styled from 'styled-components/native'

export const Space = styled.View`
    flex-direction: ${({fd}) => fd};
    margin-bottom: ${({mb}) => mb};
    margin-top: ${({mt}) => mt};
    margin-right: ${({mr}) => mr};
    margin-left: ${({ml}) => ml};
    justify-content: ${({jc}) => jc};
    align-items: ${({ai}) => ai};
    width: ${({width}) => width};
    padding: ${({pd}) => pd};
    ${({zIndex}) => zIndex && {'z-index': zIndex}};
    ${({as}) => as && {'align-self': as}};    
    ${({flex}) => flex && {'flex': flex}};    
    ${({fw}) => fw && {' flex-wrap': fw}};     
    ${({height}) => height && {height: height}};     
`
