install.packages("tidyverse")

library(ggplot2)

getwd()

data <- read.csv("survey-results.csv")

ggplot(data, aes(x = QuestionIndex, 
                 y = TimeTaken, 
                 colour = CaseVariant, 
                 size = Errors)) +
  geom_point() +
  facet_wrap(~ WordCount) +
  labs(title = "Scatter Plot Faceted by Word Count",
       subtitle = "Facets for WordCount: 2, 3, 4, 5",
       x = "Question Index",
       y = "Time Taken",
       colour = "Case Variant",
       size = "Errors") +
  theme_bw()

