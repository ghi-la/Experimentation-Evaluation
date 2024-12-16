install.packages("tidyverse")

library(ggplot2)
library(dplyr)

getwd()

survey_data <- read.csv("survey-results.csv")

# Normalize counts to represent 45 participants
demographics <- survey_data %>%
  count(AgeRange, CodingFrequency) %>%
  mutate(ScaledCount = n / sum(n) * 45)  # Scale counts to sum to 45 participants

# Demographic Distribution
ggplot(demographics, aes(x = AgeRange, y = ScaledCount, fill = CodingFrequency)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(
    title = "Demographics of Survey Participants (Scaled to 45 Participants)",
    x = "Age Range",
    y = "Estimated Count",
    fill = "Coding Frequency"
  ) +
  theme_bw() +
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1)
  )

# Time Taken by Question
ggplot(survey_data, aes(x = factor(QuestionIndex), y = TimeTaken)) +
  geom_boxplot(fill = "lightgreen", outlier.color = "red") +
  labs(
    title = "Distribution of Time Taken for Each Question",
    x = "Question Index",
    y = "Time Taken (seconds)"
  ) +
  theme_bw()

# Time Taken by Quesion+CaseVariant
ggplot(survey_data, aes(x = factor(QuestionIndex), y = TimeTaken, fill = CaseVariant)) +
  geom_boxplot(outlier.color = "red") +
  labs(
    title = "Distribution of Time Taken for Each Question",
    x = "Question Index",
    y = "Time Taken (seconds)"
  ) +
  theme_bw()

# Time Taken by CaseVariant
ggplot(survey_data, aes(x = CaseVariant, y = TimeTaken, fill = CaseVariant)) +
  geom_boxplot(outlier.color = "red") +
  labs(
    x = "Question Index",
    y = "Time Taken (seconds)"
  ) +
  theme_bw()

# Errors by Quesion+CaseVariant
ggplot(survey_data, aes(x = factor(QuestionIndex), y = Errors, fill = CaseVariant)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(
    title = "Distribution of Errors for Each Question",
    x = "Question Index",
    y = "Number of Errors",
    fill = "Case Variant"
  ) +
  theme_bw() +
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1)
  )

# Errors by CaseVariant
ggplot(survey_data, aes(x = CaseVariant, y = Errors, fill = CaseVariant)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(
    title = "Distribution of Errors for Case Variant",
    x = "Question Index",
    y = "Number of Errors",
    fill = "Case Variant"
  ) +
  theme_bw() +
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1)
  )
