package model; 

public class TrainingData {
	
	
	private String trainingTitle;
	private String trainingDescription;
	private String trainingDomain;
	private int[] exercices;

	
	
	public TrainingData(String trainingTitle, String trainingDescription, String trainingDomain) {
		this.trainingTitle = trainingTitle;
		this.trainingDescription = trainingDescription;
		this.trainingDomain= trainingDomain;
	}
	
	
}