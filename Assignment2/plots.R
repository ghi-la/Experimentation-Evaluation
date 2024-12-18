install.packages("tidyverse")

library(ggplot2)
library(dplyr)

getwd()

# Load the dataset (adjust file path if necessary)
survey_data <- read.csv("survey-results.csv", stringsAsFactors = FALSE)

# Clean up column names to remove extra spaces
names(survey_data) <- trimws(names(survey_data))

# Check column names to confirm "CodingFrequency" exists
print(names(survey_data))

# Clean the CodingFrequency column
survey_data$CodingFrequency <- trimws(survey_data$CodingFrequency)

# Filter records where CodingFrequency is "Daily" or not
expert_data <- subset(survey_data, CodingFrequency == "Daily")
nonepert_data <- subset(survey_data, CodingFrequency != "Daily")

plotDemographic <- function(survey_data){
  # Process the data to calculate scaled counts and include programming language counts
  demographics <- survey_data %>%
    group_by(AgeRange, CodingFrequency) %>%
    summarise(
      AvgProgLangCount = mean(ProgrammingLanguagesCount, na.rm = TRUE),
      Count = n()
    ) %>%
    ungroup() %>%
    mutate(ScaledCount = Count / sum(Count) * 46)
  
  # Create the plot
  ggplot(demographics, aes(x = AgeRange, y = ScaledCount, fill = CodingFrequency)) +
    geom_bar(stat = "identity", position = "dodge") +
    labs(
      title = "Demographics of Survey Participants (Scaled to 46 Participants)",
      x = "Age Range",
      y = "Number of People",
      fill = "Coding Frequency"
    ) +
    theme_bw() +
    theme(
      axis.text.x = element_text(angle = 45, hjust = 1)
    )
}

plotTimeTakenByCaseVariant <- function(survey_data, identifier="All") {
  # Time Taken by CaseVariant
  ggplot(survey_data, aes(x = CaseVariant, y = TimeTaken, fill = CaseVariant)) +
    geom_boxplot(outlier.color = "red") +
    stat_summary(fun = median, geom = "text", aes(label = round(..y.., 2)), 
                 vjust = -0.5, color = "blue", size = 3.5) +
    labs(
      x = "Case Variant",
      y = "Time Taken (nanoseconds)",
      title = paste("Time Taken by Case Variant", identifier, sep = " - ")
    ) +
    theme_bw()
}

plotTimeTakenByAgeRange <- function (survey_data){
  # Time Taken by CaseVariant
  ggplot(survey_data, aes(x = AgeRange, y = TimeTaken, fill = AgeRange)) +
    geom_boxplot(outlier.color = "red") +
    labs( 
      x = "Age Range",
      y = "Time Taken (nanoseconds)",
      title = "Time Taken by Age Range "
    ) +
    theme_bw()
}

plotErrorsByCaseVariant <- function(survey_data){
  # Errors by Quesion+CaseVariant
  ggplot(survey_data, aes(x = factor(CaseVariant), y = Errors, fill = CaseVariant)) +
    geom_boxplot(outlier.color = "red") +
    labs(
      title = "Distribution of Errors by Case Variant",
      x = "Case Variant",
      y = "Number of Errors",
      fill = "Case Variant"
    ) +
    theme_bw()
}

plotTimeTakenByCaseVariant_WordCount <- function(survey_data, identifier="All"){
  # Time Taken by CaseVariant with WordCount bins
  ggplot(survey_data, aes(x = CaseVariant, y = TimeTaken, fill = CaseVariant)) +
    geom_boxplot(outlier.color = "red") +
    facet_wrap(~ WordCount, nrow = 2) +  # Facet by WordCount bins
    labs( 
      x = "Case Variant",
      y = "Time Taken (nanoseconds)",
      title = paste("Time Taken by Case Variant Faceted by Word Count", identifier, sep = " - "),
    ) +
    theme_bw()
}


plotTimeTakenByAgeRange(expert_data)
plotErrorsByCaseVariant(survey_data)
plotDemographic(survey_data)
plotTimeTakenByCaseVariant_WordCount(expert_data, "Experts")
plotTimeTakenByCaseVariant_WordCount(nonepert_data, "Non Experts")
plotTimeTakenByCaseVariant(expert_data, "Experts")
plotTimeTakenByCaseVariant(nonepert_data, "Non Experts")
plotTimeTakenByCaseVariant(survey_data)

