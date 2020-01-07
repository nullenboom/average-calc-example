const OnDemand = artifacts.require("./AvgOnDemand.sol");
const Observer = artifacts.require("./AvgOnObserver.sol");

const addTimes = getRandomRange(100,150);
const calcTimes = getRandomRange(1,15);

contract("OnDemand", async accounts => {
  it("Scenario A", async () => {
    const onDemand = await OnDemand.new();
    
	for(var i=0; i < addTimes; i++){
	  await onDemand.add(10)
	}
	
	for(var j=0; j < calcTimes; j++) {
		await onDemand.calc()
	}
	
  });
});

contract("Observer", async accounts => {
  it("Scenario A", async () => {
	 const observer = await Observer.new();
	 
	 for(var i=0; i < addTimes; i++){
			await observer.addCalc(10)
	}
	//calc is free
	
  });
});

function getRandomRange(min, max) {
    return Math.random() * (max - min) + min;
}