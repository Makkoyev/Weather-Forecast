using System;

public class CityObject
    {
        // The default constructor has no parameters. The default constructor 
        // is invoked in the processing of object initializers. 
        // You can test this by changing the access modifier from public to 
        // private. The declarations in Main that use object initializers will 
        // fail.
        public CityObject() { }

        // The following constructor has parameters for two of the three 
        // properties. 
        public CityObject(string first, string second, string third, string forth, string fifth)
        {
            var rng = new Random();
            firstCity = first;
            secondCity = second;
            thirdCity = third;
            forthCity = forth;
            fifthCity = fifth;
        }

        // Properties.
        public string firstCity { get; set; }
        public string secondCity { get; set; }
        public string thirdCity { get; set; }
        public string forthCity { get; set; }
        public string fifthCity { get; set; }
    }