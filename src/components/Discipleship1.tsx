import LessonSection from "components/LessonSection";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

type bodyType = {
  title: string,
  verses: Array<string>
}

type lessonType = {
  lessonNumber: string,
  subtitleLesson: string,
  body: Array<bodyType>
}

const Discipleship1 = () => {
  const [lessons, setLessons] = useState<lessonType[]>();

  useEffect(() => {
    getLesson(1);
  }, []);

  const getLesson = (lessonNumber: number) => {
    console.log("Doing something");
    fetch(`/src/data/lesson-${lessonNumber}.json`)
      .then((response) => response.json())
      .then((json) => {
        setLessons(json)
      });
  }

  return <div className={"studyContainer"}>
    {lessons?.map((lesson) => {
      return <Box sx={{marginBottom: '20px'}}><LessonSection key={lesson.lessonNumber} data={lesson} /></Box>
    })}
  </div>
}

export default Discipleship1;