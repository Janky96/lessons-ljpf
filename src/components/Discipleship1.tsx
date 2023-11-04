import LessonSection from "components/LessonSection";
import { useState } from "react";
import { Box } from "@mui/material";
import lessonsFile from "data/discipleship-1.json";

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
  const [lessons, setLessons] = useState<lessonType[]>(lessonsFile);

  return <div className={"studyContainer"}>
    {lessons?.map((lesson) => {
      return <Box sx={{marginBottom: '20px'}}><LessonSection key={lesson.lessonNumber} data={lesson} /></Box>
    })}
  </div>
}

export default Discipleship1;