const OnDemand = artifacts.require("./AvgOnDemand.sol");
const Observer = artifacts.require("./AvgOnObserver.sol");

const times = getRandomRange(10,120);

contract("OnDemand", async accounts => {
  it("Scenario B", async () => {
    const onDemand = await OnDemand.new();
    
	for(var i=0; i < times; i++){
	  await onDemand.add(10)
	}
	
	for(var j=0; j < times; j++) {
		await onDemand.calc()
	}
	
  });
});

contract("Observer", async accounts => {
  it("Scenario B", async () => {
	 const observer = await Observer.new();
	 
	 for(var i=0; i < times; i++){
			await observer.addCalc(10)
	}
	//calc is free
	
  });
});

function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
}