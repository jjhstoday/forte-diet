import Button from "components/Button/Button";
import MealDialog from "components/MealDialog/MealDialog";
import { Modal } from "components/Modal/Modal";
import React from "react";
import {
  MealDialogNextButton,
  MealDialogPrevButton,
  StyledButtonContainer,
  StyledMealWrapper,
  MealDialogOkButton,
  MealDialogEditButton,
  StyledMealContainer,
} from "./MealModalGroup.styled";

export const MealModalGroup = ({
  mealsArrayList,
  onMealModal,
  prevMeal,
  nextMeal,
  mealListData,
  currentMealId,
  mealLength,
  onSetting,
  slideRef,
}) => {
  return (
    <Modal>
      <StyledMealContainer>
        <StyledMealWrapper ref={slideRef}>
          {mealsArrayList.map(({ id, review, photo, title }) => (
            <MealDialog
              key={id}
              id={id}
              title={title}
              photo={photo}
              review={review}
              onMealModal={onMealModal}
              prevMeal={prevMeal}
              nextMeal={nextMeal}
              mealListData={mealListData}
              currentMealId={currentMealId}
              mealLength={mealLength}
              slideRef={slideRef}
            ></MealDialog>
          ))}
        </StyledMealWrapper>
        <MealDialogOkButton type="button" onClick={onMealModal}>
          확인
        </MealDialogOkButton>
        <MealDialogEditButton onClick={onSetting}>수정</MealDialogEditButton>
        {/* </StyledButtonContainer> */}
        <MealDialogPrevButton type="button" onClick={prevMeal}>
          &#60;
        </MealDialogPrevButton>
        <MealDialogNextButton type="button" onClick={nextMeal}>
          &#62;
        </MealDialogNextButton>
      </StyledMealContainer>
    </Modal>
  );
};
