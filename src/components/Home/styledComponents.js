import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font-family: 'Roboto';
`

export const CreateTaskDiv = styled.div`
  background-color: #131213;
  width: 36%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  justify-content: flex-start;
  padding: 30px 20px;
  align-items: center;
`
export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`
export const FormHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #f3aa4e;
`
export const LabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  margin-top: 15px;
`
export const Label = styled.label`
  font-size: 24px;
  font-weight: 600;
  color: #f8f8f8;
  margin-bottom: 13px;
`
export const Input = styled.input`
  width: 100%;
  height: 42px;
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  padding-left: 15px;
  outline: none;
`
export const SelectInput = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 15px;
  outline: none;
  color: #000000;
`
export const OptionInput = styled.option`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`
export const FormBtn = styled.button`
  background-color: #f3aa4e;
  border: none;
  color: #f8f8f8;
  font-size: 13px;
  font-weight: 700;
  margin-top: 10px;
  cursor: pointer;
  height: 38px;
  width: 110px;
  border-radius: 8px;
`

export const AddTaskDiv = styled.div`
  background-color: #000000;
  width: 64%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`
export const MainHeading = styled.h1`
  font-size: 28px;
  margin-top: 10px;
  font-weight: 600;
  color: #f1f5f9;
`
export const TagListUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
`
export const TagList = styled.li`
  display: flex;
  margin: 7px;
`
export const TagBtn = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: solid #f3aa7e 1px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #f1f5f9;
  padding: 10px;
  padding-left: 15px;
  cursor: pointer;
  padding-right: 15px;
`
export const TaskUl = styled.ul`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  padding: 0px;
`
export const TaskListLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #131213;
  width: 100%;
  height: 64px;
  padding: 0 20px;
`
export const TaskText = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #f1f5f9;
`
export const TaskTag = styled.p`
  background-color: #f3aa4e;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #323f4b;
  padding: 8px 15px;
`

export const NoTaskText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #f1f5f9;
  align-self: center;
  text-align: center;
  margin-top: 150px;
`
