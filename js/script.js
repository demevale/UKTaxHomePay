// ======================================================================== //
// College: Capital City College                                            //
// Student: César Qiuilligana Gancino                                       //
// Code: script.js                                                          //
// ======================================================================== //

// ------------  STEP 1: User Information and Welcome Message  -------------
window.onload = function () {
    let fName = "";
    let lName = "";
    const onlyLetters = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    // Validate First Name
    while (!fName || fName.trim() === "" || !onlyLetters.test(fName.trim())) {
        fName = prompt("Enter your First Name (letters only):");
        if (fName !== null && !onlyLetters.test(fName.trim())) {
            alert("Please enter a valid First Name (letters only).");
        }
    }

    // Validate Last Name
    while (!lName || lName.trim() === "" || !onlyLetters.test(lName.trim())) {
        lName = prompt("Enter your Last Name (letters only):");
        if (lName !== null && !onlyLetters.test(lName.trim())) {
            alert("Please enter a valid Last Name (letters only).");
        }
    }

    // Show: Display the entered names in the form fields
    document.getElementById("fName").value = fName.trim();
    document.getElementById("lName").value = lName.trim();

    // Personalized welcome to the website login
    document.getElementById("welcomeMessage").textContent =
        "Welcome " + fName.trim() + " " + lName.trim() + ", your information has been registered successfully.";
};

// ------------  Student loan where the field is shown or hidden  ----------
document.querySelectorAll('input[name="hasLoan"]').forEach(radio => {
    radio.addEventListener('change', function () {
        document.getElementById("loanPlanField").style.display =
            this.value === "yes" ? "block" : "none";
    });
});

// ------------  STEP 1 go to STEP 2  --------------------------------------
function goToStep2() {
    const fName = document.getElementById("fName").value.trim();
    const lName = document.getElementById("lName").value.trim();
    const resident = document.querySelector('input[name="ukResident"]:checked');

    // Validate that all fields in Step 1 are completed
    if (!fName || !lName || !resident) {
        alert("Please complete all fields in Step 1.");
        return;
    }

    // Show: Move to Step 2    
    document.getElementById("step-1").style.display = "none";
    document.getElementById("step-2").style.display = "block";
    document.getElementById("helpSection").style.display = "none";
}

// ------------  Show Help Window  -----------------------------------------
const helpModal = document.getElementById("helpModal");
const helpContent = document.getElementById("helpContent");
const closeBtn = document.getElementById("closeBtn");

// Help Contents
const helpTexts = {
    step1: `
        <h2>UK Tax Calculator 2024–2025</h2>
        <h3>Tax & National Insurance Calculator</h3>
        <p>Welcome to the UK Tax Calculator 2024–2025.</p>
        <p>This tool helps you estimate your Income Tax and National Insurance contributions based on the information you provide.</p>
        <h4>How to use this calculator:</h4>
        <ul>
           <li>Enter your personal details correctly.</li>
           <li>Confirm whether you live in the United Kingdom.</li>
           <li>Continue through each step to complete your calculation.</li>
           <li>Your estimated annual and monthly deductions will be displayed automatically.</li>
        </ul>
           <h4>Important:</h4>
        <ul>
           <li>This calculator provides estimates only and should not be considered official financial advice.</li>
           <li>Results may vary depending on your employment status, tax code, pension contributions, and other circumstances.</li>
           <li>Your personal information is used only for calculation purposes.</li>
        </ul>
           <p>If you experience any issues while using the calculator, please refresh the page or try again later.</p>
           <p>Thank you for using the UK Tax Calculator.</p>
    `,

    step2: `
        <h2>Step 2 Help – Income Details</h2>
        <p>Welcome to the Income Details section of the UK Tax Calculator 2024–2025.</p>
        <p>In this step, you must provide your salary and deduction information so the system can estimate your taxes and net pay.</p>
        <h3>Annual Income</h3>
        <p>Enter your total yearly salary before taxes and deductions.</p>
        <ul>
            <li>Use gross annual income.</li>
            <li>Do not include monthly salary.</li>
            <li>Enter numbers only.</li>
        </ul>
        <h3>Student Loan</h3>
        <p>Select “Yes” if you currently repay a UK Student Loan through your salary.</p>
        <ul>
            <li>If you select “Yes”, you will need to choose your repayment plan.</li>
            <li>If you do not have a student loan, select “No”.</li>
        </ul>
        <h3>Type of Pension</h3>
        <p>Choose the pension option that applies to your employment.</p>
        <ul>
            <li><strong>No Pension:</strong> No pension deductions applied.</li>
            <li>
                <strong>Auto-Enrolment (NPA):</strong>
                Standard workplace pension contributions.
            </li>
            <li>
                <strong>Salary Sacrifice (NPA):</strong>
                Pension contributions deducted before tax calculations.
            </li>
            <li>
                <strong>Personal Pension (RAS):</strong>
                Private pension contributions paid separately.
            </li>
        </ul>
        <h3>Calculate Button</h3>
        <p>Press the Calculate button to generate:</p>
        <ul>
            <li>Income Tax deductions</li>
            <li>National Insurance contributions</li>
            <li>Student Loan repayments</li>
            <li>Pension deductions</li>
            <li>Net annual and monthly pay</li>
        </ul>
        <p>Please ensure all information entered is accurate before calculating your results.</p>
    `,
      
    results: `
        <h2>Results Help – Tax Calculation Summary</h2>

        <p>This section displays the final results of your UK Tax and National Insurance calculation.</p>
        <p>The calculator estimates your annual and monthly deductions based on the information entered in previous steps.</p>

        <h3>Name</h3>
        <p>Displays the registered user name used for the calculation.</p>
        <h3>UK Resident</h3>
        <p>Indicates whether the user selected UK residency status during Step 1.</p>
        <h3>Summary Table</h3>
        <p>The summary table shows a breakdown of your salary, deductions, and estimated net pay.</p>
        <ul>
            <li>
                <strong>Gross Salary:</strong>
                Your total income before deductions.
            </li>
            <li>
                <strong>Taxable Income:</strong>
                Income remaining after pension adjustments.
            </li>
            <li>
                <strong>Income Tax:</strong>
                Estimated UK Income Tax deductions.
            </li>
            <li>
                <strong>National Insurance (NI):</strong>
                Estimated National Insurance contributions.
            </li>
            <li>
                <strong>Student Loan:</strong>
                Estimated student loan repayments based on your selected plan.
            </li>
            <li>
                <strong>Pension Contribution:</strong>
                Estimated pension deductions.
            </li>
            <li>
                <strong>Net Pay:</strong>
                Final salary after all deductions.
            </li>

        </ul>

        <h3>Print Summary</h3>
        <p>Opens the browser print window to print the current calculation results.</p>
        <h3>Print Summary (document.write)</h3>
        <p>Opens a separate printable summary window generated dynamically using JavaScript.</p>
        <h3>Enter New User</h3>
        <p>Reloads the calculator and clears all current information so a new calculation can be started.</p>
        <h3>Important Notice</h3>
        <p>This calculator provides estimated values only and should not be considered official financial or legal advice.</p>
        <p>Actual deductions may vary depending on tax codes, employment conditions, pension schemes, and HMRC regulations.</p>
    `,
};

// Open help window
function showHelp(step){
    helpContent.innerHTML = helpTexts[step];
    helpModal.style.display = "block";
}

// Close button
closeBtn.addEventListener("click", function(){
    helpModal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", function(event){
    if(event.target === helpModal){
        helpModal.style.display = "none";
    }
});

// ------------  MAIN: Calculation functions ---------------------------------
function calculateTaxHome() {

    const fName = document.getElementById("fName").value.trim();
    const lName = document.getElementById("lName").value.trim();
    const annualIncome = Number(document.getElementById("annualIncome").value);
    const pensionType = document.getElementById("pensionType").value;

    const hasLoan = document.querySelector('input[name="hasLoan"]:checked').value;
    const loanPlan = document.getElementById("loanPlan").value;

    // Validate: Annual Income
    if (!annualIncome || annualIncome <= 0) {
        alert("Please enter a valid annual income.");
        return;
    }

    // Calculate pensions
    let pensionAnnual = 0;

    // Pension contributions based on type: Auto: 3%, Salary: 5%, Personal: 2.4%
    if (pensionType === "auto") pensionAnnual = annualIncome * 0.03;
    if (pensionType === "salary") pensionAnnual = annualIncome * 0.05;
    if (pensionType === "personal") pensionAnnual = annualIncome * 0.024;
 
    // Taxable Income
    let taxableIncome = annualIncome;

    // Pension contributions reduce taxable income for Auto 
    // and Salary types, but not for Personal
    if (pensionType === "auto" || pensionType === "salary") {
        taxableIncome -= pensionAnnual;
    }

    // Ensure taxable income is not negative
    if (taxableIncome < 0) taxableIncome = 0;
   
    // Personal Allowance
    let personalAllowance = 12570;

    // Personal Allowance reduction for high earners
    if (annualIncome > 100000) {
        const reduction = (annualIncome - 100000) / 2;
        personalAllowance = Math.max(0, 12570 - reduction);
    }

    // Income Tax Calculation
    let taxAnnual = 0;
    let remaining = taxableIncome;

    // Apply Personal Allowance
    if (remaining > personalAllowance) remaining -= personalAllowance;
    else remaining = 0;

    // Basic Rate: 20% on income up to £50,270
    const basicBand = 50270 - 12570;
    if (remaining > 0) {
        const basicTaxable = Math.min(remaining, basicBand);
        taxAnnual += basicTaxable * 0.20;
        remaining -= basicTaxable;
    }

    // Higher Rate: 40% on income between £50,271 and £125,140
    const higherBand = 125140 - 50270;
    if (remaining > 0) {
        const higherTaxable = Math.min(remaining, higherBand);
        taxAnnual += higherTaxable * 0.40;
        remaining -= higherTaxable;
    }

    // Additional Rate: 45% on income above £125,140
    if (remaining > 0) taxAnnual += remaining * 0.45;


    // NI: National Insurance
    let niAnnual = 0;

    const niPT = 12570;
    const niUEL = 50270;

    // NI is calculated on income above the Primary Threshold (PT)
    if (taxableIncome > niPT) {
        const niBand1 = Math.min(taxableIncome, niUEL) - niPT;
        if (niBand1 > 0) niAnnual += niBand1 * 0.08;

        if (taxableIncome > niUEL) {
            const niBand2 = taxableIncome - niUEL;
            niAnnual += niBand2 * 0.02;
        }
    }

    // Student Loan
    let loanAnnual = 0;

    // Student loan is calculated only if the user has a loan and has selected a plan
    if (hasLoan === "yes" && loanPlan !== "") {

        let threshold = 0;
        let rate = 0;

        // Set thresholds and rates based on the selected loan plan
        switch (loanPlan) {
            case "plan1": threshold = 22015; rate = 0.09; break;
            case "plan2": threshold = 27295; rate = 0.09; break;
            case "plan4": threshold = 31395; rate = 0.09; break;
            case "plan5": threshold = 25000; rate = 0.09; break;
            case "postgrad": threshold = 21000; rate = 0.06; break;
        }

        // Calculate student loan repayment based on the selected plan
        if (annualIncome > threshold) {
            loanAnnual = (annualIncome - threshold) * rate;
        }
    }
  
    // TOTAL: Final Net Pay
    // Net pay is calculated by subtracting all deductions from the annual income
    let netAnnual = annualIncome - taxAnnual - niAnnual - loanAnnual - pensionAnnual;
    
    // Net monthly pay is calculated by dividing the net annual pay by 12
    let netMonthly = netAnnual / 12;
    
    // Summary: Show Results
    // Display the results name  
    document.getElementById("resName").textContent = fName + " " + lName;

    // Display the results of the calculations in the corresponding gross anual and monthly 
    document.getElementById("grossAnnual").textContent = annualIncome.toFixed(2);
    document.getElementById("grossMonthly").textContent = (annualIncome / 12).toFixed(2);

    // Display the results of the calculations in the corresponding taxable anual and monthly
    document.getElementById("taxableAnnual").textContent = taxableIncome.toFixed(2);
    document.getElementById("taxableMonthly").textContent = (taxableIncome / 12).toFixed(2);

    // Display the results of the calculations in the corresponding personal allowance anual and monthly
    document.getElementById("taxAnnual").textContent = taxAnnual.toFixed(2);
    document.getElementById("taxMonthly").textContent = (taxAnnual / 12).toFixed(2);

    // Display the results of the calculations in the corresponding National Insurance anual and monthly
    document.getElementById("niAnnual").textContent = niAnnual.toFixed(2);
    document.getElementById("niMonthly").textContent = (niAnnual / 12).toFixed(2);

    // Display the results of the calculations in the corresponding Student Loan anual and monthly
    document.getElementById("loanAnnual").textContent = loanAnnual.toFixed(2);
    document.getElementById("loanMonthly").textContent = (loanAnnual / 12).toFixed(2);

    // Display the results of the calculations in the corresponding Pension anual and monthly
    document.getElementById("pensionAnnual").textContent = pensionAnnual.toFixed(2);
    document.getElementById("pensionMonthly").textContent = (pensionAnnual / 12).toFixed(2);

    // Display the results of the calculations in the corresponding Net Pay anual and monthly
    document.getElementById("netAnnual").textContent = netAnnual.toFixed(2);
    document.getElementById("netMonthly").textContent = netMonthly.toFixed(2);

    // Show: Move to results
    document.getElementById("step-2").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("helpSection").style.display = "none";
}

// ------------  PRINT: Print Function  --------------------------------------
function printSummary() {
    // This will open the browser's print dialog to print the current page
    window.print();
}

// ------------  PRINT SHOW WINDOWS: Summary using document.write() ----------
function printWithDocumentWrite() {
    const fname = document.getElementById("fName").value.trim();
    const lname = document.getElementById("lName").value.trim();
    const annualIncome = document.getElementById("grossAnnual").textContent;
    const netAnnual = document.getElementById("netAnnual").textContent;
    const netMonthly = document.getElementById("netMonthly").textContent;
    const resident = document.querySelector('input[name="ukResident"]:checked').value;
    const pension = document.getElementById("pensionType").value;
    const hasLoan = document.querySelector('input[name="hasLoan"]:checked').value;
    const loanPlan = document.getElementById("loanPlan").value || "None";

    // Open new window
    const win = window.open("", "_blank");

    // Show: Write summary content
    win.document.write(`
        <html>
        <head>
            <title>Calculation Summary</title>
            <link rel="stylesheet" href="css/style.css">
        </head>
        <body>

            <h1>Calculation Summary</h1>

            <p><strong>Name:</strong> ${fname} ${lname}</p>
            <p><strong>UK Resident:</strong> ${resident}</p>
            <p><strong>Gross Salary:</strong> £${annualIncome}</p>
            <p><strong>Pension Type:</strong> ${pension}</p>
            <p><strong>Student Loan:</strong> ${hasLoan === 'yes' ? loanPlan : "No"}</p>

            <hr>

            <p><strong>Net Annual Pay:</strong> £${netAnnual}</p>
            <p><strong>Net Monthly Pay:</strong> £${netMonthly}</p>

            <button onclick="window.print()" 
                style="display: inline-block;
                       padding: 8px 18px;
                       border-radius: 4px;
                       border: none;
                       font-size: 0.95rem;
                       cursor: pointer;
                       transition: background 0.15s ease, transform 0.05s ease;
                       background: #0b3c7d;
                       color: #fff;">
                Print Summary
            </button>

            <button onclick="window.close()" 
                style="display: inline-block;
                       padding: 8px 18px;
                       border-radius: 4px;
                       border: none;
                       font-size: 0.95rem;
                       cursor: pointer;
                       transition: background 0.15s ease, transform 0.05s ease;
                       background: #0b3c7d;
                       color: #fff;">
                Close Window
            </button>

            <button onclick="window.opener.location.reload(); window.close();" 
                style="display: inline-block;
                       padding: 8px 18px;
                       border-radius: 4px;
                       border: none;
                       font-size: 0.95rem;
                       cursor: pointer;
                       transition: background 0.15s ease, transform 0.05s ease;
                       background: #0b3c7d;
                       color: #fff;">
                Enter New User
            </button>

        </body>
        </html>
    `);

    // Close the document to finish writing and render the content
    win.document.close();
}