exports.postHandler = (req, res) => {
    const { data } = req.body;
    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";
  
    let numbers = [];
    let alphabets = [];
  
    data.forEach(item => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else {
        alphabets.push(item);
      }
    });
  
    const highest_alphabet = alphabets.length ? [alphabets.sort((a, b) => b.localeCompare(a))[0]] : [];
  
    res.json({
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_alphabet
    });
  };
  
  exports.getHandler = (req, res) => {
    res.json({
      operation_code: 1
    });
  };
  