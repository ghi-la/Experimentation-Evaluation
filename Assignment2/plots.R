install.packages("tidyverse")

library(ggplot2)

getwd()

data <- read.csv("survey-results.csv")

ggplot(data, aes(x=QuestionIndex, y=TimeTaken, colour = CaseVariant, size = Errors))+
  geom_point()
