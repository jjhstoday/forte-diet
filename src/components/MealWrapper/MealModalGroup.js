import React from "react";
import {
  MealDialogNextButton,
  MealDialogPrevButton,
  StyledMealWrapper,
  MealDialogSubmitButton,
  MealDialogEditButton,
  StyledMealContainer,
  MealDialogCloseButton,
  StyledMealModal,
} from "./MealModalGroup.styled";
import { MealDialog } from "components";

const MealModalGroup = ({
  mealsArrayList,
  onMealModal,
  prevMeal,
  nextMeal,
  mealListData,
  mealLength,
  onSetting,
  slideRef,
  stopEvent,
}) => {
  return (
    <StyledMealModal onClick={onMealModal}>
      <StyledMealContainer onClick={stopEvent}>
        <StyledMealWrapper ref={slideRef}>
          {mealsArrayList.map(({ id, review, photo, title, calories }) => (
            <MealDialog
              key={id}
              id={id}
              title={title}
              photo={photo}
              review={review}
              calories={calories}
              onMealModal={onMealModal}
              prevMeal={prevMeal}
              nextMeal={nextMeal}
              mealListData={mealListData}
              mealLength={mealLength}
              slideRef={slideRef}
            ></MealDialog>
          ))}
        </StyledMealWrapper>
        <MealDialogSubmitButton type="button" onClick={onMealModal}>
          확인
        </MealDialogSubmitButton>
        <MealDialogEditButton onClick={onSetting}>수정</MealDialogEditButton>
        {/* </StyledButtonContainer> */}
        <MealDialogPrevButton type="button" onClick={prevMeal}>
          &#60;
        </MealDialogPrevButton>
        <MealDialogNextButton type="button" onClick={nextMeal}>
          &#62;
        </MealDialogNextButton>
        <MealDialogCloseButton Button onClick={onMealModal}>
          X
        </MealDialogCloseButton>
      </StyledMealContainer>
    </StyledMealModal>
  );
};

export default MealModalGroup;
